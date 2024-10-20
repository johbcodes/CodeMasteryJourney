$folders = @("C", "C++", "Python", "Python3", "Java", "C#", "JavaScript", "TypeScript", "PHP", "Swift", "Kotlin", "Dart", "Go", "Ruby", "Scala", "Rust", "Racket", "Erlang", "Elixir")

foreach ($folder in $folders) {
    New-Item -Path . -Name $folder -ItemType "Directory"
}
