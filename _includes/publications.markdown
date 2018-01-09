{% for paper in site.data.pubs %}
-   {% if paper.coauthors %}(with {{ paper.coauthors }})  {% endif %}
    "{{ paper.title }}"  
    *{{ paper.journal }}*  
    [ [link]({{  paper.link  }}) ]
    {%- if paper.arxiv -%}[ [arXiv]({{ paper.arxiv }}) ] {%- endif -%}
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

<!-- -   **Tianran Chen** and Dhagash Mehta.  
    "Parallel degree computation for binomial systems".  
    *Journal of Symbolic Computation (2017), pp. 535-558*  
    [ [link](http://dx.doi.org/10.1016/j.jsc.2016.07.018) ] -->

-   Dhagash Mehta, **Tianran Chen**, John Morgan, and David Wales.  
    Response to "Comment on 'Exploring the potential energy landscape
    of the Thomson problem via Newton homotopies'".  
    *The Journal of Chemical Physics 143, 247102* (2015)  
    [ [link](http://dx.doi.org/10.1063/1.4939011) ]
    [ [bibtex](research/papers/mehta_response_2015.bib) ].

-   **Tianran Chen** and Tien-Yien Li.  
    "Homotopy continuation method for solving systems of
    nonlinear and polynomial equations".  
    *Communications in Information and Systems 15(2):119--307* (2015).  
    [ [link](http://dx.doi.org/10.4310/CIS.2015.v15.n2.a1) ]
    [ [bibtex](research/papers/chen_homotopy_2015.bib) ].

-   Dhagash Mehta, **Tianran Chen**, David Wales, and John Morgan.  
    "Exploring the potential energy landscape of the Thomson problem via Newton homotopies".  
    *The Journal of Chemical Physics 142 194113* (2015)  
    [ [link](http://dx.doi.org/10.1063/1.4921163) ]
    [ [bibtex](research/papers/mehta_exploring_2015.bib) ].

-   **Tianran Chen**, Tien-Yien Li, and Xiaoshen Wang.  
    "Theoretical aspects of mixed volume computation via mixed subdivision".  
    *Communications in Information and Systems* (2014)  
    [ [pdf](research/papers/mvol.pdf) ]
    [ [link](http://dx.doi.org/10.4310/CIS.2014.v14.n4.a1) ]
    [ [bibtex](research/papers/chen_theoretical_2014.bib) ].

-   Dhagash Mehta, **Tianran Chen**, Jonathan Hauenstein, and David Wales.  
    "Newton homotopies for sampling stationary points of potential energy landscapes".  
    *The Journal of Chemical Physics 141 (12), 121104* (2014)  
    (Selected for a Journal of Chemical Physics Editors' Choice for 2014)  
    [ [arXiv](http://arxiv.org/abs/1412.3810) ]
    [ [link](http://dx.doi.org/10.1063/1.4896657) ]
    [ [bibtex](research/papers/mehta_newton_2014.bib) ].

-   **Tianran Chen** and Tien-Yien Li.  
    "Solutions to systems of binomial equations".  
    *Annales Mathematicae Silesianae 28:7–34* (2014).  
    [ [bibtex](research/papers/chen_solutions_2014.bib) ].

-   **Tianran Chen**, Tsung-Lin Lee, and Tien-Yien Li.  
    "Hom4PS-3: A Parallel Numerical Solver for Systems of Polynomial Equations Based on Polyhedral Homotopy Continuation Methods" (Extended abstract).  
    *Mathematical Software -- ICMS 2014 -- 4th International Congress, Seoul, South Korea, August 5-9, 2014. Proceedings 8592:183–190*  
    [ [link](http://dx.doi.org/10.1007/978-3-662-44199-2_30) ]
    [ [bibtex](research/papers/chen_hom4ps3_2014.bib) ].

-   **Tianran Chen**, Tsung-Lin Lee, and Tien-Yien Li.  
    "Mixed volume computation in parallel".  
    *Taiwanese Journal of Mathematics 18(1):93–114* (2014).  
    [ [link](http://dx.doi.org/10.11650/tjm.18.2014.3276) ]
    [ [bibtex](research/papers/chen_mixed_2014.bib) ].

-   **Tianran Chen** and Tien-Yien Li.  
    "Spherical projective path tracking for homotopy continuation methods".  
    *Communications in Information and Systems 12(3):195-220* (2012)  
    [ [link](http://dx.doi.org/10.4310/CIS.2012.v12.n3.a2) ]
    [ [bibtex](research/papers/chen_spherical_2014.bib) ].
