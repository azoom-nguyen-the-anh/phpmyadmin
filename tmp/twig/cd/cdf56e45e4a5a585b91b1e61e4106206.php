<?php

use Twig\Environment;
use Twig\Error\LoaderError;
use Twig\Error\RuntimeError;
use Twig\Extension\SandboxExtension;
use Twig\Markup;
use Twig\Sandbox\SecurityError;
use Twig\Sandbox\SecurityNotAllowedTagError;
use Twig\Sandbox\SecurityNotAllowedFilterError;
use Twig\Sandbox\SecurityNotAllowedFunctionError;
use Twig\Source;
use Twig\Template;

/* login/form.twig */
class __TwigTemplate_bb3813f773eed68dc2bd498c864998f0 extends Template
{
    private $source;
    private $macros = [];

    public function __construct(Environment $env)
    {
        parent::__construct($env);

        $this->source = $this->getSourceContext();

        $this->parent = false;

        $this->blocks = [
        ];
    }

    protected function doDisplay(array $context, array $blocks = [])
    {
        $macros = $this->macros;
        // line 1
        echo ($context["login_header"] ?? null);
        echo "
<center>
<a href=\"/phpmyadmin/host-list/\" target=\"_blank\">Host list</a>
</center>

";
        // line 6
        if (($context["is_demo"] ?? null)) {
            // line 7
            echo "  <div class=\"card mb-4\">
    <div class=\"card-header\">";
echo _gettext("phpMyAdmin Demo Server");
            // line 8
            echo "</div>
    <div class=\"card-body\">
      ";
            // line 10
            ob_start(function () { return ''; });
            // line 11
            echo "        ";
echo _gettext("You are using the demo server. You can do anything here, but please do not change root, debian-sys-maint and pma users. More information is available at %s.");
            // line 14
            echo "      ";
            $___internal_parse_0_ = ('' === $tmp = ob_get_clean()) ? '' : new Markup($tmp, $this->env->getCharset());
            // line 10
            echo twig_sprintf($___internal_parse_0_, "<a href=\"url.php?url=https://demo.phpmyadmin.net/\" target=\"_blank\" rel=\"noopener noreferrer\">demo.phpmyadmin.net</a>");
            // line 15
            echo "    </div>
  </div>
";
        }
        // line 18
        echo "
";
        // line 19
        echo ($context["error_messages"] ?? null);
        echo "

";
        // line 21
        if ( !twig_test_empty(($context["available_languages"] ?? null))) {
            // line 22
            echo "  <div class='hide js-show'>
    <div class=\"card mb-4\">
      <div class=\"card-header\">
        <span id=\"languageSelectLabel\">
          ";
echo _gettext("Language");
            // line 27
            echo "          ";
            if ((_gettext("Language") != "Language")) {
                // line 28
                echo "            ";
                // line 30
                echo "            <i lang=\"en\" dir=\"ltr\">(Language)</i>
          ";
            }
            // line 32
            echo "        </span>
      </div>
      <div class=\"card-body\">
        <form method=\"get\" action=\"";
            // line 35
            echo PhpMyAdmin\Url::getFromRoute("/");
            echo "\" class=\"disableAjax\">
          ";
            // line 36
            echo PhpMyAdmin\Url::getHiddenInputs(($context["form_params"] ?? null));
            echo "
          <select name=\"lang\" class=\"form-select autosubmit\" lang=\"en\" dir=\"ltr\" id=\"languageSelect\" aria-labelledby=\"languageSelectLabel\">
            ";
            // line 38
            $context['_parent'] = $context;
            $context['_seq'] = twig_ensure_traversable(($context["available_languages"] ?? null));
            foreach ($context['_seq'] as $context["_key"] => $context["language"]) {
                // line 39
                echo "              <option value=\"";
                echo twig_escape_filter($this->env, twig_lower_filter($this->env, twig_get_attribute($this->env, $this->source, $context["language"], "getCode", [], "method", false, false, false, 39)), "html", null, true);
                echo "\"";
                echo ((twig_get_attribute($this->env, $this->source, $context["language"], "isActive", [], "method", false, false, false, 39)) ? (" selected") : (""));
                echo ">";
                // line 40
                echo twig_get_attribute($this->env, $this->source, $context["language"], "getName", [], "method", false, false, false, 40);
                // line 41
                echo "</option>
            ";
            }
            $_parent = $context['_parent'];
            unset($context['_seq'], $context['_iterated'], $context['_key'], $context['language'], $context['_parent'], $context['loop']);
            $context = array_intersect_key($context, $_parent) + $_parent;
            // line 43
            echo "          </select>
        </form>
      </div>
    </div>
  </div>
";
        }
        // line 49
        echo "
<form method=\"post\" id=\"login_form\" action=\"index.php?route=/\" name=\"login_form\" class=\"";
        // line 51
        echo (( !($context["is_session_expired"] ?? null)) ? ("disableAjax hide ") : (""));
        echo "js-show\"";
        echo (( !($context["has_autocomplete"] ?? null)) ? (" autocomplete=\"off\"") : (""));
        echo ">
  ";
        // line 53
        echo "  ";
        echo PhpMyAdmin\Url::getHiddenInputs(($context["form_params"] ?? null), "", 0, "server");
        echo "
  <input type=\"hidden\" name=\"set_session\" value=\"";
        // line 54
        echo twig_escape_filter($this->env, ($context["session_id"] ?? null), "html", null, true);
        echo "\">
  ";
        // line 55
        if (($context["is_session_expired"] ?? null)) {
            // line 56
            echo "    <input type=\"hidden\" name=\"session_timedout\" value=\"1\">
  ";
        }
        // line 58
        echo "
  <div class=\"card mb-4\">
    <div class=\"card-header\">
      ";
echo _gettext("Log in");
        // line 62
        echo "      ";
        echo PhpMyAdmin\Html\MySQLDocumentation::showDocumentation("index");
        echo "
    </div>
    <div class=\"card-body\">
      ";
        // line 65
        if (($context["is_arbitrary_server_allowed"] ?? null)) {
            // line 66
            echo "        <div class=\"row mb-3\">
          <label for=\"serverNameInput\" class=\"col-sm-4 col-form-label\" title=\"";
echo _gettext("You can enter hostname/IP address and port separated by space.");
            // line 67
            echo "\">
            ";
echo _gettext("Server:");
            // line 69
            echo "          </label>
          <div class=\"col-sm-8\">
            <input type=\"text\" name=\"pma_servername\" id=\"serverNameInput\" value=\"";
            // line 71
            echo twig_escape_filter($this->env, ($context["default_server"] ?? null), "html", null, true);
            echo "\" class=\"form-control\" title=\"";
echo _gettext("You can enter hostname/IP address and port separated by space.");
            // line 72
            echo "\">
          </div>
        </div>
      ";
        }
        // line 76
        echo "
      <div class=\"row mb-3\">
        <label for=\"input_username\" class=\"col-sm-4 col-form-label\">
          ";
echo _gettext("Username:");
        // line 80
        echo "        </label>
        <div class=\"col-sm-8\">
          <input type=\"text\" name=\"pma_username\" id=\"input_username\" value=\"";
        // line 82
        echo twig_escape_filter($this->env, ($context["default_user"] ?? null), "html", null, true);
        echo "\" class=\"form-control\" autocomplete=\"username\" spellcheck=\"false\">
        </div>
      </div>

      <div class=\"row\">
        <label for=\"input_password\" class=\"col-sm-4 col-form-label\">
          ";
echo _gettext("Password:");
        // line 89
        echo "        </label>
        <div class=\"col-sm-8\">
          <input type=\"password\" name=\"pma_password\" id=\"input_password\" value=\"\" class=\"form-control\" autocomplete=\"current-password\" spellcheck=\"false\">
        </div>
      </div>

      ";
        // line 95
        if (($context["has_servers"] ?? null)) {
            // line 96
            echo "        <div class=\"row mt-3\">
          <label for=\"select_server\" class=\"col-sm-4 col-form-label\">
            ";
echo _gettext("Server choice:");
            // line 99
            echo "          </label>
          <div class=\"col-sm-8\">
            <select name=\"server\" id=\"select_server\" class=\"form-select\"";
            // line 102
            if (($context["is_arbitrary_server_allowed"] ?? null)) {
                echo " onchange=\"document.forms['login_form'].elements['pma_servername'].value = ''\"";
            }
            echo ">
              ";
            // line 103
            echo ($context["server_options"] ?? null);
            echo "
            </select>
          </div>
        </div>
      ";
        } else {
            // line 108
            echo "        <input type=\"hidden\" name=\"server\" value=\"";
            echo twig_escape_filter($this->env, ($context["server"] ?? null), "html", null, true);
            echo "\">
      ";
        }
        // line 110
        echo "    </div>
    <div class=\"card-footer\">
      ";
        // line 112
        if (($context["has_captcha"] ?? null)) {
            // line 113
            echo "        <script src=\"";
            echo twig_escape_filter($this->env, ($context["captcha_api"] ?? null), "html", null, true);
            echo "?hl=";
            echo twig_escape_filter($this->env, ($context["lang"] ?? null), "html", null, true);
            echo "\" async defer></script>
        ";
            // line 114
            if (($context["use_captcha_checkbox"] ?? null)) {
                // line 115
                echo "          <div class=\"row g-3\">
            <div class=\"col\">
              <div class=\"";
                // line 117
                echo twig_escape_filter($this->env, ($context["captcha_req"] ?? null), "html", null, true);
                echo "\" data-sitekey=\"";
                echo twig_escape_filter($this->env, ($context["captcha_key"] ?? null), "html", null, true);
                echo "\"></div>
            </div>
            <div class=\"col align-self-center text-end\">
              <input class=\"btn btn-primary\" value=\"";
echo _gettext("Log in");
                // line 120
                echo "\" type=\"submit\" id=\"input_go\">
            </div>
          </div>
        ";
            } else {
                // line 124
                echo "          <input class=\"btn btn-primary ";
                echo twig_escape_filter($this->env, ($context["captcha_req"] ?? null), "html", null, true);
                echo "\" data-sitekey=\"";
                echo twig_escape_filter($this->env, ($context["captcha_key"] ?? null), "html", null, true);
                echo "\" data-callback=\"Functions_recaptchaCallback\" value=\"";
echo _gettext("Log in");
                echo "\" type=\"submit\" id=\"input_go\">
        ";
            }
            // line 126
            echo "      ";
        } else {
            // line 127
            echo "        <input class=\"btn btn-primary\" value=\"";
echo _gettext("Log in");
            echo "\" type=\"submit\" id=\"input_go\">
      ";
        }
        // line 129
        echo "    </div>
  </div>
</form>

";
        // line 133
        if ( !twig_test_empty(($context["errors"] ?? null))) {
            // line 134
            echo "  <div id=\"pma_errors\">
    ";
            // line 135
            echo ($context["errors"] ?? null);
            echo "
  </div>
  </div>
  </div>
";
        }
        // line 140
        echo "
";
        // line 141
        echo ($context["login_footer"] ?? null);
        echo "

";
        // line 143
        echo ($context["config_footer"] ?? null);
        echo "
";
    }

    public function getTemplateName()
    {
        return "login/form.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  337 => 143,  332 => 141,  329 => 140,  321 => 135,  318 => 134,  316 => 133,  310 => 129,  304 => 127,  301 => 126,  291 => 124,  285 => 120,  276 => 117,  272 => 115,  270 => 114,  263 => 113,  261 => 112,  257 => 110,  251 => 108,  243 => 103,  237 => 102,  233 => 99,  228 => 96,  226 => 95,  218 => 89,  208 => 82,  204 => 80,  198 => 76,  192 => 72,  188 => 71,  184 => 69,  180 => 67,  176 => 66,  174 => 65,  167 => 62,  161 => 58,  157 => 56,  155 => 55,  151 => 54,  146 => 53,  140 => 51,  137 => 49,  129 => 43,  122 => 41,  120 => 40,  114 => 39,  110 => 38,  105 => 36,  101 => 35,  96 => 32,  92 => 30,  90 => 28,  87 => 27,  80 => 22,  78 => 21,  73 => 19,  70 => 18,  65 => 15,  63 => 10,  60 => 14,  57 => 11,  55 => 10,  51 => 8,  47 => 7,  45 => 6,  37 => 1,);
    }

    public function getSourceContext()
    {
        return new Source("", "login/form.twig", "/Users/azoom/Desktop/www/phpmyadmin/templates/login/form.twig");
    }
}
