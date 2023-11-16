const dotenv = require('dotenv').config();
const createClient =require('@supabase/supabase-js').createClient;

const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_ANON);

module.exports = supabase;