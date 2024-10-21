const apiUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/api/submit`;
export const submitHandler = async ({ name, email, subject, message } : { name:string, email:string, subject:string, message:string }) => {

    try {
      const res = await fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, subject, message }),
      });
    } catch (error) {
      console.error(error);
    }

  }