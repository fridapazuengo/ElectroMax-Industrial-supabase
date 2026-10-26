import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://jllllfbunjfnugxhpsmr.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpsbGxsZmJ1bmpmbnVneGhwc21yIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODk1MDQxNjAsImV4cCI6MjEwNTA4MDE2MH0.cSTvuyGhyz4CvhvpL9MP8wcAnRTq2fmaAH-xC1YjKoY'
const supabase = createClient(supabaseUrl, supabaseKey)
async function obtenerEstudiantes() {
 const { data, error } = await supabase
 .from('estudiantes')
 .select('*')
 if (error) {
 console.log('Error:', error)
 } else {
 console.log('Datos:', data)
 }
}
obtenerEstudiantes()