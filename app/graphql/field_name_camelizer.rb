class FieldNameCamelizer
  def instrument(_type, field)
    field.property = field.name.underscore.to_sym if field.resolve_proc.is_a?(GraphQL::Field::Resolve::NameResolve)
    field.name = field.name.camelize(:lower)
    field.arguments = transform_arguments(field.arguments)
    field
  end

  def transform_arguments(field_args)
    Hash[
      field_args.map do |_name, argument|
        argument.as = argument.name.underscore
        argument.name = argument.name.camelize(:lower)
        [argument.name, argument]
      end
    ]
  end
end
