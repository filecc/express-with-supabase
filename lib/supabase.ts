const dotenv = require('dotenv').config();
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(process.env.SUPABASE_URL as string, process.env.SUPABASE_ANON as string);

export default supabase;