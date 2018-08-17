Types::CompanyInputType = GraphQL::InputObjectType.define do
  name "CompanyInputType"
  description "Input for creating company"

  argument :id, types.ID
  argument :legal_name, types.String
  argument :contact_name, types.String
  argument :contact_phone, types.String
  argument :address, types.String
  argument :vesting_schedule, types.String
  argument :rights, types.String
  argument :restrictive_legends, types.String
  argument :acceleration_provisions, types.String
  argument :ceo_signature, types.String
  argument :certificate_of_incorporation, types.String
  argument :secretary_signature, types.String
  argument :remove_ceo_signature, types.Boolean
  argument :remove_certificate_of_incorporation, types.Boolean
  argument :remove_secretary_signature, types.Boolean
end
