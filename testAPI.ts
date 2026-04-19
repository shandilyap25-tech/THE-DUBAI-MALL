async function test() {
  try {
    const res = await fetch('http://localhost:3000/api/sections');
    const text = await res.text();
    console.log("Sections response status:", res.status);
    console.log("Sections response preview:", text.substring(0, 100));
  } catch(e) {
    console.error("Test failed:", e);
  }
}
test();
