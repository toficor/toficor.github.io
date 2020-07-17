NDSummary.OnToolTipsLoaded("File:vote/view/QuestionViewController.java",{98:"<div class=\"NDToolTip TClass LJava\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype98\"><div class=\"CPEntry TClass Current\"><div class=\"CPModifiers\">@Controller <span class=\"SHKeyword\">public</span></div><div class=\"CPName\">QuestionViewController</div></div></div><div class=\"TTSummary\">Reprezentuje kontroler pytania.</div></div>",100:"<div class=\"NDToolTip TFunction LJava\"><div id=\"NDPrototype100\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">@GetMapping(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PNamePrefix first\"><span class=\"SHString\">&quot;/</span></td><td class=\"PName last\">questions&quot;</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">public</span> ModelAndView displayQuestionTable()</td></tr></table></div><div class=\"TTSummary\">Wyświetla pytania</div></div>",101:"<div class=\"NDToolTip TFunction LJava\"><div id=\"NDPrototype101\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">@GetMapping(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PNamePrefix first\"><span class=\"SHString\">&quot;/</span></td><td class=\"PName last\">create-question&quot;</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">public</span> String displayCreateQuestionForm(Model model)</td></tr></table></div><div class=\"TTSummary\">Wyświetla formularz do tworzenia pytań</div></div>",102:"<div class=\"NDToolTip TFunction LJava\"><div id=\"NDPrototype102\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">@PostMapping(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PNamePrefix first\"><span class=\"SHString\">&quot;/</span></td><td class=\"PName last\">create-question&quot;</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">public</span> String createQuestion(@Valid @ModelAttribute(name = <span class=\"SHString\">&quot;dto&quot;</span>) CreateUpdateQuestionDto dto, BindingResult bindingResult, Model model)</td></tr></table></div><div class=\"TTSummary\">Tworzy pytanie</div></div>",103:"<div class=\"NDToolTip TFunction LJava\"><div class=\"TTSummary\">Wyświetla pytania i warianty</div></div>",104:"<div class=\"NDToolTip TFunction LJava\"><div id=\"NDPrototype104\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">@GetMapping(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PNamePrefix first\"><span class=\"SHString\">&quot;/</span></td><td class=\"PName last\">add-question/{id}&quot;</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">public</span> ModelAndView displayAddQuestionForm(@PathVariable String id, @ModelAttribute CreateUpdateQuestionDto dto)</td></tr></table></div><div class=\"TTSummary\">Wyświetla formularz dodawania pytania</div></div>",105:"<div class=\"NDToolTip TFunction LJava\"><div id=\"NDPrototype105\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">@PostMapping(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PNamePrefix first\"><span class=\"SHString\">&quot;/</span></td><td class=\"PName last\">add-question/{id}&quot;</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">public</span> String addQuestion(@ModelAttribute CreateUpdateQuestionDto dto, @PathVariable String id)</td></tr></table></div><div class=\"TTSummary\">Dodaje pytanie</div></div>"});