import {createClient} from "@supabase/supabase-js";

const supabaseUrl = "https://enguhwjoyrjhrnfppwio.supabase.co"
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVuZ3Vod2pveXJqaHJuZnBwd2lvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzU3NTAzOTcsImV4cCI6MjA1MTMyNjM5N30.g8eLrGKL7thG4jlSm48qEzqYserXwATpS1Av2v8I7kM";
export const supabase = createClient(supabaseUrl, supabaseKey);