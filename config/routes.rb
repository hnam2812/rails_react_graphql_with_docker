Rails.application.routes.draw do
  devise_for :users, path: "",
                     path_names: {
                       sign_out: "logout"
                     },
                     controllers: { sessions: "users/sessions", registrations: "users/registrations" }
  mount GraphiQL::Rails::Engine, at: "/graphiql", graphql_path: "/graphql" if Rails.env.development?
  post "/graphql" => "graphql#execute"
  root "pages#home"
  get "*path", to: "pages#home"
end
