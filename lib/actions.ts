export const submitHandler = async ({ name, email, subject, message } : { name:string, email:string, subject:string, message:string }) => {

    try {
      const res = await fetch("/api/submit", {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, subject, message }),
      });
    } catch (error) {
      console.error(error);
    }

  }