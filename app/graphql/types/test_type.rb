Types::TestType = GraphQL::ObjectType.define do
  name "Test"
  description "Test"

  field :test_field, types.String
end
