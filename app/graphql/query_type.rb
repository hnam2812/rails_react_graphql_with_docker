QueryType = GraphQL::ObjectType.define do
  name "Query"
  description "The query root of this schema"

  field :test, !Types::TestType do
    resolve ->(_, _args, _ctx) {
      return "test"
    }
  end

  field :shareholders, !types[Types::ShareholderType] do
    resolve ->(_, _args, _ctx) {
      Shareholder.all
    }
  end

  field :shareholder, !Types::ShareholderType do
    description "Get a shareholder"
    argument :id, !types.ID

    resolve ->(_, args, _ctx) {
      Shareholder.find(args["id"])
    }
  end

  field :companies, !types[Types::CompanyType] do
    resolve ->(_, _args, _ctx) {
      Company.all
    }
  end

  field :company, !Types::CompanyType do
    description "Get a company"
    argument :id, !types.ID

    resolve ->(_obj, args, _ctx) {
      Company.find(args["id"])
    }
  end
end
