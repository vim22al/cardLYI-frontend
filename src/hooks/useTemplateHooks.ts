import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { templatesApi, type Template } from '../api/templates.api';
import { useAuthStore } from '../stores/useAuthStore';

export const useTemplatesQuery = (params?: { type?: string; search?: string }) => {
  const { token } = useAuthStore();
  return useQuery({
    queryKey: ['templates', params],
    queryFn: () => templatesApi.getTemplates(token!, params),
    enabled: !!token,
  });
};

export const useTemplateByIdQuery = (id: string) => {
  const { token } = useAuthStore();
  return useQuery({
    queryKey: ['template', id],
    queryFn: () => templatesApi.getTemplateById(id, token!),
    enabled: !!token && !!id,
  });
};

export const useCreateTemplateMutation = () => {
  const queryClient = useQueryClient();
  const { token } = useAuthStore();
  return useMutation({
    mutationFn: (template: Partial<Template>) => templatesApi.createTemplate(template, token!),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['templates'] });
    },
  });
};

export const useUpdateTemplateMutation = () => {
  const queryClient = useQueryClient();
  const { token } = useAuthStore();
  return useMutation({
    mutationFn: ({ id, updates }: { id: string; updates: Partial<Template> }) =>
      templatesApi.updateTemplate(id, updates, token!),
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ['templates'] });
      queryClient.invalidateQueries({ queryKey: ['template', data._id] });
    },
  });
};

export const useDeleteTemplateMutation = () => {
  const queryClient = useQueryClient();
  const { token } = useAuthStore();
  return useMutation({
    mutationFn: (id: string) => templatesApi.deleteTemplate(id, token!),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['templates'] });
    },
  });
};
