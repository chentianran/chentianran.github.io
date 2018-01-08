{% for paper in site.data.pubs %}
-   {% if paper.coauthors %}(with {{ paper.coauthors }})  {% endif %}
    "{{ paper.title }}"  
    *{{ paper.journal }}*  
    {% if paper.link  %}[ [link]({{  paper.link  }}) ]{% endif %}
    {% if paper.arxiv %}[ [arXiv]({{ paper.arxiv }}) ]{% endif %}
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

-   **Tianran Chen** and Dhagash Mehta.  
    "On the Network Topology Dependent Solution Count of the Algebraic Load Flow Equations".  
    *IEEE Transactions on Power Systems*  
    [ [pdf](research/papers/powerflow-bkk.pdf) ]
    [ [link](https://doi.org/10.1109/TPWRS.2017.2724030) ]
    [
        <a data-toggle="collapse"
        href="#abs-powerflow"
        aria-expanded="false"
        aria-controls="abs-powerflow">
            abstract
        </a>
    ]
    [
        <a data-toggle="collapse"
        href="#bib-powerflow"
        aria-expanded="false"
        aria-controls="bib-powerflow">
            bibtex
        </a>
    ]

    <div class="collapse" id="abs-powerflow">
      <div class="card card-body">
          Abstract: Active research activity in power systems areas has focused on developing computational methods to solve load flow equations where a key question is the maximum number of solutions. Though several upper bounds exist, recent studies have hinted that much sharper upper bounds that depend the topology of underlying power networks may exist. This paper provides a significant refinement of these observations. We also develop a geometric construction called adjacency polytope which accurately captures the topology of a power network and is immensely useful in the computation of the solution bound. Finally we highlight the significant implications of the development of such solution bounds in numerically solving load flow equations.development of such solution bounds in numerically solving load flow equations.
      </div>
    </div>

    <div class="collapse" id="bib-powerflow">
        <div class="card card-body">
            <pre>
            <code>
            {% raw %}
            @article{chen_network_2017,
                author = {Chen, Tianran and Mehta, Dhagash},
                doi = {10.1109/TPWRS.2017.2724030},
                issn = {0885-8950},
                journal = {IEEE Transactions on Power Systems},
                pages = {1--1},
                title = {{On the Network Topology Dependent Solution Count of the Algebraic Load Flow Equations}},
                url = {http://ieeexplore.ieee.org/document/7971956/},
                year = {2017}
            }
            {% endraw %}
            </code>
            </pre>
        </div>
    </div>

-   **Tianran Chen**, Tsung-Lin Lee, and Tien-Yien Li.  
    "Mixed cell computation in Hom4PS-3".  
    *Journal of Symbolic Computation (2017), pp. 516-534*  
    [ [link](http://dx.doi.org/10.1016/j.jsc.2016.07.017) ]

-   **Tianran Chen** and Dhagash Mehta.  
    "Parallel degree computation for binomial systems".  
    *Journal of Symbolic Computation (2017), pp. 535-558*  
    [ [link](http://dx.doi.org/10.1016/j.jsc.2016.07.018) ]

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
