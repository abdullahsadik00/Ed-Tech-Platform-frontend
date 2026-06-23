import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { api } from '@/lib/api';
import type { ApiResponse, Enrollment } from '@/types/course';

export const enrollmentKeys = {
  mine: () => ['enrollments', 'mine'] as const,
  check: (courseId: number) => ['enrollments', 'check', courseId] as const,
};

export function useMyEnrollments() {
  return useQuery({
    queryKey: enrollmentKeys.mine(),
    queryFn: () => api.get<ApiResponse<Enrollment[]>>('/api/enrollments/me'),
  });
}

export function useCheckEnrollment(courseId: number) {
  return useQuery({
    queryKey: enrollmentKeys.check(courseId),
    queryFn: () =>
      api.get<ApiResponse<{ enrolled: boolean; enrollment: Enrollment | null }>>(
        `/api/courses/${courseId}/enrollment`
      ),
    enabled: courseId > 0,
    retry: false,
  });
}

export function useEnroll() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (courseId: number) =>
      api.post<ApiResponse<Enrollment>>(`/api/courses/${courseId}/enroll`, {}),
    onSuccess: (_data, courseId) => {
      queryClient.invalidateQueries({ queryKey: enrollmentKeys.mine() });
      queryClient.invalidateQueries({ queryKey: enrollmentKeys.check(courseId) });
    },
  });
}
