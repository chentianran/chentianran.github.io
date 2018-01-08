{% for paper in site.data.prep %}
-   {% if paper.coauthors %}(with {{ paper.coauthors }})  {% endif %}
    "{{ paper.title }}"  
    [ [arXiv]({{ paper.arxiv }}) ]
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
{% endfor %}
