import { ApolloLink } from 'apollo-boost'

export default new ApolloLink((operation, forward) => {
  if (operation.variables) {
    operation.variables = omitDeep(operation.variables, '__typename')
  }

  return forward!(operation)
})

function omitDeep(obj: any, key: string) {
  if (Array.isArray(obj)) return omitDeepArrayWalk(obj, key)
  const keys = Object.keys(obj)
  const newObj = {} as any
  keys.forEach(i => {
    if (i !== key) {
      const val = obj[i]
      if (Array.isArray(val)) newObj[i] = omitDeepArrayWalk(val, key)
      else if (typeof val === 'object' && val !== null) newObj[i] = omitDeep(val, key)
      else newObj[i] = val
    }
  })
  return newObj
}

function omitDeepArrayWalk<T>(arr: Array<T>, key: string): any {
  return arr.map(val => {
    if (Array.isArray(val)) return omitDeepArrayWalk(val, key)
    if (typeof val === 'object') return omitDeep(val, key)
    return val
  })
}
