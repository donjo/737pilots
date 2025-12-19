import { useSignal } from "@preact/signals";

export default function JoinButton() {
  const showModal = useSignal(false);
  const email = useSignal("");
  const name = useSignal("");
  const submitted = useSignal(false);

  const handleSubmit = (e: Event) => {
    e.preventDefault();
    // In a real app, this would submit to an API
    console.log("Signup:", { name: name.value, email: email.value });
    submitted.value = true;
    setTimeout(() => {
      showModal.value = false;
      submitted.value = false;
      email.value = "";
      name.value = "";
    }, 2000);
  };

  return (
    <>
      <button
        class="cta-button"
        onClick={() => showModal.value = true}
      >
        Join the Crew!
      </button>

      {showModal.value && (
        <div class="modal-overlay" onClick={() => showModal.value = false}>
          <div class="modal-content" onClick={(e) => e.stopPropagation()}>
            {submitted.value ? (
              <div style={{ textAlign: "center" }}>
                <h3>Welcome Aboard! ✈</h3>
                <p>Check your email to complete signup.</p>
              </div>
            ) : (
              <>
                <h3>Join the Crew</h3>
                <form onSubmit={handleSubmit}>
                  <input
                    type="text"
                    placeholder="Your Name"
                    value={name.value}
                    onInput={(e) => name.value = (e.target as HTMLInputElement).value}
                    required
                  />
                  <input
                    type="email"
                    placeholder="Email Address"
                    value={email.value}
                    onInput={(e) => email.value = (e.target as HTMLInputElement).value}
                    required
                  />
                  <div class="modal-buttons">
                    <button type="submit" class="primary">Sign Up</button>
                    <button
                      type="button"
                      class="secondary"
                      onClick={() => showModal.value = false}
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}
