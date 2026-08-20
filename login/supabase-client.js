const SUPABASE_URL = "https://merugolympcngamjukzo.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1lcnVnb2x5bXBjbmdhbWp1a3pvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODcyMDM2MTQsImV4cCI6MjEwMjc3OTYxNH0.N1qeRzRv6vcUFEk4CucMMQarnnIG0P_6OgAwy451saM";

// Utilisation directe de window.supabase sans redéclaration
window.supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
