define({
  "_widgetLabel": "Editor Inteligente",
  "_featureAction_SmartEditor": "Editor Inteligente",
  "noEditPrivileges": "A sua conta não tem permissão para criar ou modificar dados.",
  "loginPopupTitle": "Iniciar sessão",
  "loginPopupMessage": "${widgetName} requer permissões e créditos para pesquisar e armazenar informações de endereço. Pretende iniciar sessão e usar esta função?",
  "noCreditsOrPrivilegeWarningMessage": "A sua conta não tem as permissões nem os créditos para pesquisar e armazenar informações de endereço com ${widgetName}. Contacte o administrador da sua organização para solicitar permissões e créditos. Clique em OK para continuar a editar.",
  "unableToUseLocator": "O localizador não está acessível. A ação ou ações do atributo de endereço não serão executadas. Clique em OK para continuar a editar.",
  "locatorDisabledWaning": "O localizador não está ativado. Contacte o administrador da sua organização para solicitar esta função. Clique em OK para continuar a editar.",
  "noFeatureInAIWarning": "Nenhum elemento selecionado. Selecione um elemento para realizar as edições ou clique em cancelar para regressar ao ecrã principal.",
  "noEditableLayerWarning": "A sua conta não tem permissão para criar ou modificar dados ou este mapa web não contém nenhuma camada editável.",
  "noVisibleCreateLayerWarning": "Camada ou camadas não visíveis no nível de zoom atual. Aumente ou diminua o zoom para criar/modificar elementos.",
  "noVisibleUpdateLayerWarning": "Camada ou camadas não visíveis no nível de zoom atual. Aumente ou diminua o zoom para modificar elementos.",
  "checkLayerVisibilityInWebMapWarning": "Certifique-se de que as camadas estão visíveis no mapa para criar ou modificar elementos.",
  "showSelectionInAITitle": "Elementos Selecionados",
  "showSelectionInAIMsg": "Pretende carregar a seleção atual em ${widgetName}?",
  "widgetActive": "Ativo",
  "widgetNotActive": "Não Ativo",
  "pressStr": "Pressione ",
  "ctrlStr": " CTRL ",
  "snapStr": " para ativar o ajuste automático",
  "noAvailableTempaltes": "Modelos não disponíveis",
  "editorCache": " - Cache de Editor",
  "presetFieldAlias": "Campo",
  "presetValue": "Valor Predefinido",
  "usePresetValues": " Usar valores predefinidos (apenas novos elementos)",
  "editGeometry": " Editar Geometria",
  "savePromptTitle": "Guardar elemento",
  "savePrompt": "Pretende guardar o elemento atual?",
  "deletePromptTitle": "Eliminar elemento",
  "deleteAttachment": "Eliminar anexo",
  "deletePrompt": "Tem a certeza que pretende eliminar o elemento selecionado?",
  "attachmentLoadingError": "Erro ao carregar anexos",
  "attachmentSaveDeleteWarning": "Aviso: As alterações aplicadas a anexos são guardadas automaticamente",
  "autoSaveEdits": "Guardar novos elementos automaticamente",
  "addNewFeature": "Criar novo elemento",
  "featureCreationFailedMsg": "Não é possível criar novo registo/elemento",
  "relatedItemTitle": "Tabela/Camada Relacionada",
  "relatedFeatureCount": "${layerTitle} com ${featureCount} elementos",
  "createNewFeatureLabel": "Criar um novo elemento para ${layerTitle}",
  "invalidRelationShipMsg": "Por favor, assegure que o campo chave primário: '${parentKeyField}' tem um valor válido",
  "pendingFeatureSaveMsg": "Por favpr, guarde as edições ao elemento antes de criar um elemento relacionado.",
  "attachmentsRequiredMsg": "(*) Os anexos são necessários.",
  "coordinatePopupTitle": "Mover elemento para localização XY",
  "coordinatesSelectTitle": "Sistema de Coordenadas:",
  "mapSpecialReferenceDropdownOption": "Referência Espacial do Mapa",
  "latLongDropdownOption": "Latitude/Longitude",
  "mgrsDropdownOption": "Sistema de Referência da Rede Militar (MGRS)",
  "mgrsTextBoxLabel": "Coordenar:",
  "xAttributeTextBoxLabel": "Coordenada X:",
  "yAttributeTextBoxLabel": "Coordenada Y:",
  "latitudeTextBoxLabel": "Latitude:",
  "longitudeTextBoxLabel": "Longitude:",
  "presetGroupFieldsLabel": "'${groupName}' será aplicado aos seguintes campos de camada:",
  "presetGroupNoFieldsLabel": "'${groupName}' não tem quaisquer campos associados",
  "groupInfoLabel": "Informações do grupo para '${groupName}'",
  "editGroupInfoIcon": "Editar valor do grupo para ${groupName}",
  "filterEditor": {
    "all": "Todas",
    "noAvailableTempaltes": "Modelos não disponíveis",
    "searchTemplates": "Modelos Pesquisáveis",
    "filterLayerLabel": "Filtrar Camadas"
  },
  "invalidConfiguration": "O widget não se encontra configurado ou as camadas da configuração já não se encontram no mapa.  Por favor, abra a aplicação no modo de builder e reconfigure o widget.",
  "geometryServiceURLNotFoundMSG": "Não é possível obter o URL do Serviço de Geometria",
  "clearSelection": "Fechar",
  "refreshAttributes": "Atualizar atributos de elementos dinâmicos",
  "automaticAttributeUpdatesOn": "Atualizar atributos de elementos automaticamente: LIGADO",
  "automaticAttributeUpdatesOff": "Atualizar atributos de elementos automaticamente: DESLIGADO",
  "moveSelectedFeatureToGPS": "Mover elemento selecionado para a localização de GPS atual",
  "moveSelectedFeatureToXY": "Mover elemento selecionado para localização XY",
  "mapNavigationLocked": "Navegação de Mapa: Bloqueada",
  "mapNavigationUnLocked": "Navegação de Mapa: Desbloqueada",
  "copyFeatures": {
    "title": "Selecionar elementos para copiar",
    "createFeatures": "Criar Elementos",
    "createSingleFeature": "Criar 1 Elemento de Múltiplas Partes",
    "createOneSingleFeature": "Criar Elemento",
    "noFeaturesSelectedMessage": "Sem Elementos Selecionados",
    "selectFeatureToCopyMessage": "Selecione elementos para copiar",
    "multipleFeatureSaveWarning": "A criação de múltiplos elementos com esta funcionalidade irá guardar todos os elementos de imediato. A correspondência de campos não é suportada ao criar um novo elemento de múltiplas partes.",
    "copyFeatureUpdateGeometryError": "Não foi possível atualizar a geometria dos elementos selecionados",
    "canNotSaveMultipleFeatureWarning": "Não é possível copiar múltiplos elementos ao usar o mesmo valor para campos de valor único; selecione apenas um elemento",
    "createOnlyOneMultipartFeatureWarning": "Só pode ser criado um elemento de múltiplas partes",
    "layerLabel": "${layerName} (${selectedFeatures}/${totalFeatures})",
    "layerAriaLabel": "${layerName} ${selectedFeatures} de ${totalFeatures} elementos selecionados"
  },
  "addingFeatureError": "Erro ao adicionar os elementos selecionados na camada. Tente novamente.",
  "addingFeatureErrorCount": "Não foi possível copiar '${copyFeatureErrorCount}' elemento(s). Pretende tentar novamente para o(s) elemento(s) em falta?",
  "selectingFeatureError": "Erro ao selecionar elementos na camada. Tente novamente.",
  "customSelectOptionLabel": "Selecionar elementos para copiar",
  "copyFeaturesWithPolygon": "Copiar por polígono",
  "copyFeaturesWithRect": "Copiar por retângulo",
  "copyFeaturesWithLasso": "Copiar por laço",
  "noFeatureSelectedMessage": "Nenhum elemento selecionado",
  "multipleFeatureSaveMessage": "Todos os elementos serão guardados de imediato. Pretende continuar?",
  "relativeDates": {
    "dateTypeLabel": "Tipo de Dados",
    "valueLabel": "Valor",
    "fixed": "Corrigido",
    "current": "Actual",
    "past": "Passados",
    "future": "Futuro",
    "popupTitle": "Selecionar Valor",
    "hintForFixedDateType": "Sugestão: a data e hora especificadas serão utilizadas como valor padrão predefinido.",
    "hintForCurrentDateType": "Sugestão: a data e hora atuais serão utilizadas como valor padrão predefinido.",
    "hintForPastDateType": "Sugestão: o valor especificado será subtraído à data e hora atuais para o valor padrão da definição.",
    "hintForFutureDateType": "Sugestão: o valor especificado será adicionado à data e hora atuais para o valor padrão da definição.",
    "noDateDefinedTooltip": "Nenhuma data definida",
    "relativeDateWarning": "Deve ser especificado um valor para a data ou hora para permitir guardar o valor padrão predefinido.",
    "customLabel": "Personalizar",
    "layerLabel": "Camada",
    "domainFieldHintLabel": "O valor selecionado é um domínio de valor codificado. O valor: \"${domainValue}\" será usado"
  },
  "valuePicker": {
    "popupTitle": "Selecionar Valor",
    "popupHint": "O elemento atual interseta-se com vários elementos, escolha o valor para o respetivo campo",
    "buttonTooltip": "Selecionar valor para vários elementos de interseção"
  },
  "uniqueValueErrorMessage": "O valor em \"${fieldName}\" já existe; faculte um novo valor.",
  "requiredFields": {
    "displayMsg": "Os campos obrigatórios não podem ficar vazios. Forneça valores para os campos comuns abaixo.",
    "popupTittle": "Campos obrigatórios",
    "foundNullRecordCount": "${fieldName} (Encontrado em ${count} registos)"
  },
  "fieldsMapping": {
    "popupTittle": "Correspondência de Campos",
    "fieldsMatchingCheckboxLabel": "Os valores dos elementos copiados substituem os valores predefinidos nos campos de destino",
    "resetLabel": "Repor",
    "clearLabel": "Limpar",
    "fieldsInTargetLayerLabel": "Destino",
    "fieldsInSourceLayerLabel": "Fonte",
    "targetFieldsMatchedLabel": "${layerName} (${matchedFields}/${totalFields} campos com correspondência)",
    "selectSourceFieldLabel": "- Selecionar -",
    "selectFieldAriaLabel": "Selecione o campo de origem para o campo de destino ${targetField}",
    "informativeText": "Analise os campos correspondentes da origem para o destino e personalize-os, se necessário.",
    "dynamicValueText": "Está definido um valor dinâmico",
    "noFieldsToMatchLabel": "Sem campos para corresponder"
  },
  "cantLocateUserLocation": "Não foi possível determinar a sua localização",
  "tryAgainButtonLabel": "Tentar novamente",
  "copyFeatureFailedPopupTitle": "Ups!"
});