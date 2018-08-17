Types::TestInputType = GraphQL::InputObjectType.define do
  name "TestInput"
  description "Test input"

  argument :test, types.String
end
