import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { api } from '@/lib/api';
import type { ApiResponse, CourseProgress } from '@/types/course';

export const progressKeys = {
  course: (courseId: number) => ['progress', courseId] as const,
};

export function useCourseProgress(courseId: number) {
  return useQuery({
    queryKey: progressKeys.course(courseId),
    queryFn: () =>
      api.get<ApiResponse<CourseProgress>>(`/api/progress/${courseId}`),
    enabled: courseId > 0,
    retry: false,
  });
}

export function useMarkSubSectionComplete(courseId: number) {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (subSectionId: number) =>
      api.post<
        ApiResponse<Pick<CourseProgress, 'progress' | 'completedSectionIds'>>
      >(`/api/progress/${courseId}/subsections/${subSectionId}`, {}),
    onSuccess: (response) => {
      queryClient.setQueryData(
        progressKeys.course(courseId),
        (old: ApiResponse<CourseProgress> | undefined) => {
          if (!old) return old;
          return {
            ...old,
            data: {
              ...old.data,
              progress: response.data.progress,
              completedSectionIds: response.data.completedSectionIds,
            },
          };
        }
      );
    },
  });
}
