import { supabase } from '../lib/supabaseClient'

export default function Account({ session }) {
  return (
    <div className="form-widget">
      <div>サインインしています</div>
      <div>
        <button
          className="button block"
          onClick={() => supabase.auth.signOut()}
        >
          サインアウト
        </button>
      </div>
    </div>
  )
}
