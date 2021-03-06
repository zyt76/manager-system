const isProd = process.env.NODE_ENV === 'production'

const base = isProd ? 'http://zyt76.com' : 'http://localhost:8080'

export default {
  home: `${base}/api/public/skill.json`,
  login: `${base}/api/public/login`,
  skill: {
    add: `${base}/api/private/skill/add`,
    remove: `${base}/api/private/skill/remove`
  }
}
