use Rack::Static,
  :urls => ["/images", "/js", "/css"],
  :root => "public"

run lambda { |env|
  [
    200,
    {
      'Content-Type'  => 'text/html',
      'Cache-Control' => 'public, max-age=86400'
    },
    File.open('public/index.html', File::RDONLY)
  ]
}

run lambda { |env|
  [
    200,
    {
      'Content-Type'  => 'application/json',
      'Cache-Control' => 'public, max-age=86400'
    },
    File.open('public/js/amb/data/links.json', File::RDONLY)
  ]
}