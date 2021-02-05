const letter1 = document.querySelector('.letter1'),
    letter2 = document.querySelector('.letter2'),
    letter3 = document.querySelector('.letter3');




const p = new Promise(function(resolve, reject) {
        anime({
            targets: letter1,
            translateY: -250,
            easing: 'easeInOutQuad',
            borderRadius: ['0%', '50%'],
            backgroundColor: '#FF5733',
            scale: 3,
            rotateZ: '1turn',
            duration: 3000
        });
        resolve();
});

p.then(() => {
        return new Promise((resolve, reject) => {
            setTimeout(()=> {
                anime({
                    targets: letter2,
                    translateY: -250,

                    easing: 'easeInOutQuad',
                    borderRadius: ['0%', '50%'],
                    backgroundColor: '#ccc',
                    scale: 1,
                    rotateZ: '1turn',
                });
                resolve();
            }, 2000)
        })
}).then(() => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            anime({
                targets: letter3,
                translateY: -250,
                translateX: -10,
                borderRadius: ['0%', '50%'],
                backgroundColor: '#FF33F8',
                scale: 1,
                rotateZ: '1turn',
                width: '100%'
            });
            resolve();
        }, 3000)
    });

})