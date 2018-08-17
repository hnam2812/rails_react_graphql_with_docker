require "json"

namespace :graphql do
  namespace :dump do
    namespace :json do
      desc "Dumps the result of the Schema introspection query into ./app/javascript-webpacked/graphql/__generated__/schema.json"
      task client: [:environment] do
        target = Rails.root.join("app/javascript-webpacked/graphql/__generated__/schema.json")
        result = Schema.execute(GraphQL::Introspection::INTROSPECTION_QUERY)
        File.open(target, "w+") do |f|
          f.write(JSON.pretty_generate(result))
        end
        puts "Schema dumped into app/javascript-webpacked/graphql/__generated__/schema.json"
      end
    end

    desc "Dumps schema.json in app/javascript-webpacked/graphql/__generated__/"
    task json: ["graphql:dump:json:client"]
  end
end
