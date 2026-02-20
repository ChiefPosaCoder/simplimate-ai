// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const DATA_HEADER = require('./json/header.json')
const DATA_STORIES = require('./json/stories.json')
const DATA_FOOTER = require('./json/footer.json')
const DATA_PROJECTS = require('./json/projects.json')
const DATA_MEMBERS = require('./json/members.json')
const DATA_ARTICLES = require('./json/articles.json')
const DATA_SOCIAL = require('./json/social.json')
const DATA_CONTACTUS = require('./json/contactus.json')
const DATA_SERVICES = require('./json/services.json')
const DATA_RESOURCES = require('./json/resources.json')
const DATA_LOWCODE = require('./json/lowcode.json')
const DATA_MODERNISE = require('./json/Modernise.json')

export default function handler(req, res) {
  if (req.method === 'POST') {

    const { types } = req.body
    const output = {}

    if (Array.isArray(types)) {
      types.reduce((acc, type) => {
        acc[type] =
          type === 'header'
            ? { ...DATA_HEADER }
            : type === 'stories'
              ? { ...DATA_STORIES }
              : type === 'footer'
                ? { ...DATA_FOOTER }
                : type === 'projects'
                  ? { ...DATA_PROJECTS }
                  : type === 'members'
                    ? { ...DATA_MEMBERS }
                    : type === 'contactus'
                      ? { ...DATA_CONTACTUS }
                      : type === 'articles'
                        ? { ...DATA_ARTICLES }
                        : type === 'social'
                          ? { ...DATA_SOCIAL }
                          : type === 'services'
                            ? { ...DATA_SERVICES }
                            : type === 'lowcode'
                              ? { ...DATA_LOWCODE }
                              : type === 'Modernise'
                                ? { ...DATA_MODERNISE }
                                : type === 'resources'
                                  ? { ...DATA_RESOURCES }
                                    : {}
        return acc
      }, output)
    }

    res.send({ ...output })

  } else {
    // Handle any other HTTP method
  }
}
