<ol reversed>
{% for paper in site.data.pubs %}
  <li>
    <p>
    {% if paper.coauthors %}(with {{ paper.coauthors }}) <br />{% endif %}
    "{{ paper.title }}" <br />
    <em>{{ paper.journal }}</em><br />
    [ <a href="{{ paper.link }}">link</a> ]
    {% if paper.pdf   %}
      [ <a href="/research/papers/{{ paper.pdf }}">pdf</a> ]
    {% endif %}
    {% if paper.arxiv %}
      [ <a href="{{ paper.arxiv }}">arXiv</a> ]
    {% endif %}
    [
        <a data-toggle="collapse"
        href="#abs-{{ paper.nickname }}"
        aria-expanded="false"
        aria-controls="abs-{{ paper.nickname }}">
            abstract
        </a>
    ]
    [
        <a data-toggle="collapse"
        href="#bib-{{ paper.nickname }}"
        aria-expanded="false"
        aria-controls="bib-{{ paper.nickname }}">
            bibtex
        </a>
    ]
    </p>
    <div class="collapse" id="abs-{{ paper.nickname }}">
        <div class="panel panel-default">
            <div class="panel-body">
                Abstract: {{ paper.abstract }}
            </div>
        </div>
    </div>
    <div class="collapse" id="bib-{{ paper.nickname }}">
        <div class="card card-body">
            <pre><code>{{ paper.bibtex }}</code></pre>
        </div>
    </div>
  </li>
{% endfor %}
</ol>
