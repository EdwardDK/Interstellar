let inFrame

try {
  inFrame = window !== top
} catch (e) {
  inFrame = true
}


document.addEventListener('DOMContentLoaded', function (event) {
  if (window.localStorage.getItem('v4Particles') === 'true') {
    const scr = document.createElement('script')
    scr.src = '/assets/scripts/particles.js'
    document.body.appendChild(scr)
  }
})

let splashtext = [
  'Over 7 Million Users in 2023!',
  'Fastest growing proxy server!',
  'Made by Bubbo!',
  'Check out discord.gg/interstellar :)',
  'Thanks for using the site',
  'Follow us on Tiktok (@useinterstellar)',
  'Subscribe to us on YouTube (@unblocking)',
  'Subscribe to my Youtube (@xbubbo)',
  'Check out the settings page',
  'Check out our Patreon (https://www.patreon.com/gointerstellar)',
]

document.getElementById('splash').innerText = splashtext[Math.floor(Math.random() * splashtext.length)]
