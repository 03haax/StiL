const url = "https://qiwmtbkaewogvhiojlkz.supabase.co/rest/v1/rpc/get?input=";
const apikey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFpd210YmthZXdvZ3ZoaW9qbGt6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODM3NDEyOTcsImV4cCI6MTk5OTMxNzI5N30.cIGIIUWBhoIdi8R9IkUaVtGbTVZ7Z6fdVQJGBjIkCeA";

async function getName(stiL) {
  const mail = stiL.substring(0, 8) + "-s@student.lu.se";
  const response = await fetch(url + mail, {
    method: "GET",
    headers: { apikey },
  });

  return response;
}

const form = document.getElementById("form");
const input = document.getElementById("stilid");
const output = document.getElementById("output");


form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const response = await getName(input.value);
  let data = "";
  if (response.status !== 200) {
    data = "Database error";
  } else {
    data = await response.json();
    if (!data) data = "Not found";
  }

  output.innerHTML = data;
});
