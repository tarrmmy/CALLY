import { createClient } from "@supabase/supabase-js";

export const supabaseClient = createClient(
    "https://bzweglsaptxmfbbhljdg.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ6d2VnbHNhcHR4bWZiYmhsamRnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjc2NzM4NjIsImV4cCI6MjA0MzI0OTg2Mn0.oEMX3_pXZsEO9png_IIdS9_cRqffVbbpZ1vLvrvTClo"
);
