const url = 'https://qiwmtbkaewogvhiojlkz.supabase.co/rest/v1/rpc/get?input='
const apikey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFpd210YmthZXdvZ3ZoaW9qbGt6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODM3NDEyOTcsImV4cCI6MTk5OTMxNzI5N30.cIGIIUWBhoIdi8R9IkUaVtGbTVZ7Z6fdVQJGBjIkCeA'

const form = document.getElementById("form")
const input = document.getElementById("stilid")
const output = document.getElementById("output")

form.addEventListener("submit", async e => {
    e.preventDefault()

    const response = await fetch(url + input.value + '@student.lu.se', {
        method: "GET",
        headers: { apikey }
    });

    let data = '';
    if (response.status !== 200) {
        data = 'ERROR'
    } else {
        data = await response.json()
        if (!data) data = 'Not found'
    }

    output.innerHTML = data
})