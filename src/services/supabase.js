import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://bohdbdzsyxyionvofhhu.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJvaGRiZHpzeXh5aW9udm9maGh1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTMzODk4NzIsImV4cCI6MjAwODk2NTg3Mn0.tGROyMZLB399Vyc7HoHsUvs9ufW3ju6R2cnGsGpNOsU";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
