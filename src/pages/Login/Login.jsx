import styles from "./Login.module.css"
import { useAuthentication } from "../../hooks/useAuthentication"
import {useState, useEffect} from 'react'

const Login = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")
  
    const{login, error: authError, loading} = useAuthentication();
  
    const handleSubmit = async (e) => {
      e.preventDefault()
  
      setError("")
      
      const user = {
        email,
        password
      }
  
  
      // Aguarda uma resposta da criação de Usuário
      const res = await login(user)
      console.log(user)
      
    };
  
    // Observa se o authError será alterado
    useEffect (() => {
      if(authError) {
        setError(authError)
      }
    }, [authError])

  return (
    <div className={styles.login} >
      <h1>Entrar</h1>
      <p>Faça login para acessar sua conta</p>
      <form onSubmit={handleSubmit}>
        <label>
          <span>E-mail:</span>
          <input type="email" name="email" required placeholder="Insira seu E-mail" value={email} onChange={(e) => setEmail(e.target.value)}/>
        </label>
        <label>
          <span>Senha:</span>
          <input type="password" name="password" required placeholder="Insira sua senha" value={password} onChange={(e) => setPassword(e.target.value)}/>
        </label>
        {!loading && <button className="btn">Entrar</button>}
        {loading && <button className="btn" disabled>Aguarde...</button>}
        {error && <p className="error">{authError}</p>}
        
      </form>
    </div>
  )
}

export default Login
