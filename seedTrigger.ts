async function triggerSeed() {
  try {
    const res = await fetch('http://localhost:3000/api/admin/seed', {
      method: 'POST'
    });
    const text = await res.text();
    console.log("Seed response:", text);
  } catch(e) {
    console.error("Seed failed:", e);
  }
}

triggerSeed();
