'use client';
import { useEffect, useState } from 'react';
import { api } from '@/lib/api';

type Course = {
  id: string;
  title: string;
  description: string;
  progress: number;
  // Add other course properties as needed
};

export function useCourses() {
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const { data } = await api.get('/courses/me');
        setCourses(data);
      } catch (err) {
        setError('Failed to load courses');
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  return { courses, loading, error };
}
