import { useState, useEffect } from "react";
import { db } from "../firebase/config";
import { collection, query, orderBy, onSnapshot, where } from "firebase/firestore";

export const useFetchDocuments = (docCollection, search = null, uid = null) => {
    const [documents, setDocuments] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const collectionRef = collection(db, docCollection);

        let q = query(collectionRef, orderBy("createdAt", "desc"));

        const unsubscribe = onSnapshot(
            q,
            (snapshot) => {
                const docs = snapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                }));
                setDocuments(docs);
                setLoading(false);
            },
            (error) => {
                console.error(error);
                setError(error.message);
                setLoading(false);
            }
        );

        return () => unsubscribe();
    }, [docCollection, search, uid]);

    return { documents, loading, error };
};
