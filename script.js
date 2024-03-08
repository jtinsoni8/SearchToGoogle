document.getElementById('clean').addEventListener('click', () => {
            document.getElementById('inpt')
                .value = '';
            document.getElementById('clean').style.display = 'none';
        });
        
        window.addEventListener('keydown', () => {
            if (document.getElementById('inpt').value.length > 0) {
                document.getElementById('clean').style.display = 'block';
            }
        })
        
        document.getElementById('search1').addEventListener('click', () => {
            window.location.href = `https://www.google.com/search?q=${document.getElementById('inpt').value}`
})