 if Rails.env === "production"
  Rails.application.config.session_store :cookie_store, key: '_frontend', domain: 'backend'
else 
  Rails.application.config.session_store :cookie_store, key: '_frontend'
end
