import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { api } from '@/lib/api';
import type {
  Course,
  Section,
  SubSection,
  ApiResponse,
  PaginatedCoursesResponse,
} from '@/types/course';

export const courseKeys = {
  all: ['courses'] as const,
  list: (filters: Record<string, unknown>) => ['courses', 'list', filters] as const,
  detail: (id: number) => ['courses', 'detail', id] as const,
  mine: () => ['courses', 'mine'] as const,
};

interface CourseFilters {
  search?: string;
  level?: string;
  page?: number;
  limit?: number;
  featured?: boolean;
}

function buildQueryString(filters: CourseFilters) {
  const params = new URLSearchParams();
  if (filters.search) params.set('search', filters.search);
  if (filters.level) params.set('level', filters.level);
  if (filters.page) params.set('page', String(filters.page));
  if (filters.limit) params.set('limit', String(filters.limit));
  if (filters.featured) params.set('featured', 'true');
  const qs = params.toString();
  return qs ? `?${qs}` : '';
}

export function useCourses(filters: CourseFilters = {}) {
  return useQuery({
    queryKey: courseKeys.list(filters as Record<string, unknown>),
    queryFn: () =>
      api.get<ApiResponse<PaginatedCoursesResponse>>(
        `/api/courses${buildQueryString(filters)}`
      ),
  });
}

export function useCourse(id: number) {
  return useQuery({
    queryKey: courseKeys.detail(id),
    queryFn: () => api.get<ApiResponse<Course>>(`/api/courses/${id}`),
    enabled: id > 0,
  });
}

export function useInstructorCourses() {
  return useQuery({
    queryKey: courseKeys.mine(),
    queryFn: () => api.get<ApiResponse<Course[]>>('/api/courses/mine'),
  });
}

export function useCreateCourse() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: Record<string, unknown>) =>
      api.post<ApiResponse<Course>>('/api/courses', data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: courseKeys.mine() });
    },
  });
}

export function useUpdateCourse(id: number) {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: Record<string, unknown>) =>
      api.put<ApiResponse<Course>>(`/api/courses/${id}`, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: courseKeys.detail(id) });
      queryClient.invalidateQueries({ queryKey: courseKeys.mine() });
    },
  });
}

export function usePublishCourse() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: number) =>
      api.put<ApiResponse<Course>>(`/api/courses/${id}/publish`, {}),
    onSuccess: (_data, id) => {
      queryClient.invalidateQueries({ queryKey: courseKeys.detail(id) });
      queryClient.invalidateQueries({ queryKey: courseKeys.mine() });
    },
  });
}

export function useCreateSection() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({
      courseId,
      data,
    }: {
      courseId: number;
      data: Record<string, unknown>;
    }) =>
      api.post<ApiResponse<Section>>(`/api/courses/${courseId}/sections`, data),
    onSuccess: (_data, { courseId }) => {
      queryClient.invalidateQueries({ queryKey: courseKeys.detail(courseId) });
    },
  });
}

export function useDeleteSection() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({
      sectionId,
    }: {
      sectionId: number;
      courseId: number;
    }) => api.delete<ApiResponse<{ id: number }>>(`/api/sections/${sectionId}`),
    onSuccess: (_data, { courseId }) => {
      queryClient.invalidateQueries({ queryKey: courseKeys.detail(courseId) });
    },
  });
}

export function useCreateSubSection() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({
      sectionId,
      data,
    }: {
      sectionId: number;
      courseId: number;
      data: Record<string, unknown>;
    }) =>
      api.post<ApiResponse<SubSection>>(
        `/api/sections/${sectionId}/subsections`,
        data
      ),
    onSuccess: (_data, { courseId }) => {
      queryClient.invalidateQueries({ queryKey: courseKeys.detail(courseId) });
    },
  });
}

export function useDeleteSubSection() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({
      subSectionId,
    }: {
      subSectionId: number;
      courseId: number;
    }) =>
      api.delete<ApiResponse<{ id: number }>>(`/api/subsections/${subSectionId}`),
    onSuccess: (_data, { courseId }) => {
      queryClient.invalidateQueries({ queryKey: courseKeys.detail(courseId) });
    },
  });
}
