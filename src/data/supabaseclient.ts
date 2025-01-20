import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://ehqyghzmncsmssxypjve.supabase.co'; // Reemplaza con tu URL de Supabase
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVocXlnaHptbmNzbXNzeHlwanZlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzYyNjY0MjgsImV4cCI6MjA1MTg0MjQyOH0.eM6-MGi1drbUvxUBEf6Wo0C8zME1iK5aK6-wDQXd1vo'; // Reemplaza con tu clave pública de Supabase

export const supabase = createClient(supabaseUrl, supabaseKey);
