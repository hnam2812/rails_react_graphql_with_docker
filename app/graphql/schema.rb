Schema = GraphQL::Schema.define do
  instrument(:field, FieldNameCamelizer.new)

  resolve_type ->(_type, _obj, _ctx) {
    return Types::Test
  }

  query QueryType
  mutation MutationType
  use GraphQL::Batch
end
