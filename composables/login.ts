export const useLogin = () => {
    const isLogin = useState<boolean>('isLogin', () => false)

    function setIsLogin(state: boolean) {
        isLogin.value = state
    }
    
    return {
        isLogin,
        setIsLogin
    }
  }