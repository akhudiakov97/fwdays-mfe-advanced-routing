import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_KEY
);

function Login() {
  console.log("here");
  return (
    <div className="login-container">
      <h2>Login</h2>
      <>
        <h3>Hello user!</h3>
        <button
          onClick={async () => {
            const { error } = await supabase.auth.signOut();
          }}
        >
          Sign out
        </button>
      </>
    </div>
  );
}

export default Login;
