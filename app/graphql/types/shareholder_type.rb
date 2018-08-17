Types::ShareholderType = GraphQL::ObjectType.define do
  name "Shareholder"
  description "An shareholder"

  field :id, !types.ID
  field :legal_name, types.String
  field :contact_address, types.String
  field :contact_email, types.String
  field :contact_phone, types.String
  field :note, types.String
  field :verified, types.Boolean
  field :accredited, types.Boolean
  field :on_chain, types.Boolean
end
