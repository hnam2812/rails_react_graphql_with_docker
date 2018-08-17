MutationType = GraphQL::ObjectType.define do
  name "Mutation"
  description "The mutation root of this schema"

  field :test, Types::TestType do
    argument :input, !Types::TestInputType

    resolve ->(_, _args, _ctx) {
      return "Test"
    }
  end

  field :create_shareholder, Types::ShareholderType do
    argument :input, !Types::ShareholderInputType
    resolve ->(_, args, _ctx) {
      input = args["input"].to_h
      begin
        shareholder = Shareholder.new(input)
        shareholder.save!
        shareholder
      rescue ActiveRecord::RecordInvalid
        GraphQL::ExecutionError.new(shareholder.errors.full_messages.to_s)
      end
    }
  end

  field :update_shareholder, Types::ShareholderType do
    argument :input, !Types::ShareholderInputType
    argument :id, !types.ID
    resolve ->(_, args, _ctx) {
      input = args["input"].to_h
      begin
        shareholder = Shareholder.find(args["id"])
        shareholder.update! input
        shareholder
      rescue ActiveRecord::RecordInvalid
        GraphQL::ExecutionError.new(shareholder.errors.full_messages.to_s)
      end
    }
  end

  field :create_company, Types::CompanyType do
    argument :input, !Types::CompanyInputType
    resolve ->(_, args, _ctx) {
      input = args["input"].to_h
      begin
        company = Company.new(input)
        company.save!
        company
      rescue ActiveRecord::RecordInvalid
        GraphQL::ExecutionError.new(company.errors.full_messages.to_s)
      end
    }
  end

  field :update_company, Types::CompanyType do
    argument :input, !Types::CompanyInputType
    argument :id, !types.ID
    resolve ->(_, args, _ctx) {
      input = args["input"].to_h
      begin
        company = Company.find(args["id"])
        company.update! input
        company
      rescue ActiveRecord::RecordInvalid
        GraphQL::ExecutionError.new(company.errors.full_messages.to_s)
      end
    }
  end

  field :delete_shareholder, Types::ShareholderType do
    argument :id, !types.ID

    resolve ->(_, args, _ctx) {
      shareholder = Shareholder.find(args["id"])
      shareholder.destroy
    }
  end

  field :delete_company, Types::CompanyType do
    argument :id, !types.ID

    resolve ->(_, args, _ctx) {
      company = Company.find(args["id"])
      company.destroy
    }
  end
end
