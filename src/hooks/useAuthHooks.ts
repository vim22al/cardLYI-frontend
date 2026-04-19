import { useMutation } from '@tanstack/react-query';
import { authApi } from '@/api/auth.api';
import { useAuthStore } from '@/stores/useAuthStore';
import { toast } from 'sonner';

export const useLoginMutation = () => {
  const setAuth = useAuthStore((s) => s.setAuth);
  
  return useMutation({
    mutationFn: (data: any) => authApi.login(data),
    onSuccess: (resData) => {
      setAuth(resData.user, resData.token);
      toast.success('Welcome back!');
    },
    onError: (error: Error) => {
      toast.error(error.message);
    },
  });
};

export const useSignupMutation = () => {
  const setAuth = useAuthStore((s) => s.setAuth);
  
  return useMutation({
    mutationFn: (data: any) => authApi.signup(data),
    onSuccess: (resData) => {
      setAuth(resData.user, resData.token);
      toast.success('Account created successfully!');
    },
    onError: (error: Error) => {
      toast.error(error.message);
    },
  });
};
