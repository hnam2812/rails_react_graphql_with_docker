Types::CompanyType = GraphQL::ObjectType.define do
  name "Company"
  description "A Company"

  field :id, !types.ID
  field :legal_name, types.String
  field :contact_name, types.String
  field :contact_phone, types.String
  field :address, types.String
  field :vesting_schedule, types.String
  field :rights, types.String
  field :restrictive_legends, types.String
  field :acceleration_provisions, types.String
  field :acceleration_provisions, types.String

  field :ceo_signature, types.String
  field :certificate_of_incorporation, types.String
  field :secretary_signature, types.String

  field :ceo_signature_filename, types.String
  field :certificate_of_incorporation_filename, types.String
  field :secretary_signature_filename, types.String

  field :ceo_signature_file_size, types.Int
  field :certificate_of_incorporation_file_size, types.Int
  field :secretary_signature_file_size, types.Int

  field :ceo_signature_file_extension, types.String
  field :certificate_of_incorporation_file_extension, types.String
  field :secretary_signature_file_extension, types.String

  field :remove_ceo_signature, types.Boolean
  field :remove_certificate_of_incorporation, types.Boolean
  field :remove_secretary_signature, types.Boolean
end
