Types::ShareholderInputType = GraphQL::InputObjectType.define do
  name "ShareholderInputType"
  description "Input for creating shareholder"

  argument :id, types.ID
  argument :legal_name, types.String
  argument :contact_address, types.String
  argument :contact_email, types.String
  argument :contact_phone, types.String
  argument :note, types.String
end
